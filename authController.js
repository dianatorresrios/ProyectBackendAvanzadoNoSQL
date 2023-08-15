const User = require('../models/User');

const authController = {
  registro: async (req, res) => {
    try {
      // Aquí puedes realizar validaciones y encriptar la contraseña antes de guardar el usuario
      const nuevoUsuario = await User.create(req.body);
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
      res.status(400).json({ error: 'Error al registrar usuario' });
    }
  },
};

module.exports = authController;
