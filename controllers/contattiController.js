const Contatto = require('../models/Contatto');

// POST /api/contatti
exports.inviaContatto = async (req, res) => {
  try {
    const { nome, email, messaggio } = req.body;
    const nuovoContatto = new Contatto({ nome, email, messaggio });
    await nuovoContatto.save();
    res.status(201).json({ message: 'Messaggio inviato con successo' });
  } catch (error) {
    res.status(500).json({ error: 'Errore nel salvataggio del messaggio' });
  }
};

// GET /api/contatti
exports.listaContatti = async (req, res) => {
  try {
    const contatti = await Contatto.find().sort({ data: -1 });
    res.json(contatti);
  } catch (error) {
    res.status(500).json({ error: 'Errore nel recupero dei messaggi' });
  }
};
