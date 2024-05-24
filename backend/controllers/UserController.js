import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  try {
    const response = await prisma.user.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserbyId = async (req, res) => {
    try {
      const response = await prisma.user.findUnique({
        where: {
          id: Number(req.params.id),
        }
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
export const createUser = async (req, res) => {
  const { name, password, alamat } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        password: password,
        alamat: alamat,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateUser = async (req, res) => {
  const { name, password, alamat } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: name,
        password: password,
        alamat: alamat,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
    const {name, password, alamat} = req.body
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


// export const deleteProduct = async (req, res) => {
//     const { name, price } = req.body;
//     try {
//       const product = await prisma.product.delete({
//         where: {
//           id: Number(req.params.id),
//         },
//       });
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(400).json({ msg: error.message });
//     }
//   };