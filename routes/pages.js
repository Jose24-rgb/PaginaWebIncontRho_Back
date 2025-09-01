// src/routes/pages.js
const express = require('express');
const router = express.Router();

// Endpoint Visione e Missione
router.get('/visionemissione', (req, res) => {
  res.json({ success: true });
});
   

router.get('/volontariato', (req, res) => {
    res.json({ success: true });
  });
   

router.get('/attivismo', (req, res) => {
    res.json({ success: true });
  });
      

router.get('/trasparenza', (req, res) => {
    res.json({ success: true });
  });
      

router.get('/sostegno', (req, res) => {
    res.json({ success: true });
  });


router.get('/formazione', (req, res) => {
    res.json({ success: true });
  });


router.get('/progetti-attivita', (req, res) => {
    res.json({ success: true });
  });


router.get('/prevenire-proteggere', (req, res) => {
    res.json({ success: true });
  });


router.get('/partnership-collaborazioni', (req, res) => {
    res.json({ success: true });
  });


router.get('/carta-dei-servizi', (req, res) => {
    res.json({ success: true });
  });
 

router.get('/supporto', (req, res) => {
    res.json({ success: true });
  });


 
router.get('/home', (req, res) => {
  res.json({ success: true });
});
  

router.get('/contatti', (req, res) => {
    res.json({ success: true });
  });


router.get('/benefici-fiscali', (req, res) => {
    res.json({ success: true });
  });

  module.exports = router;