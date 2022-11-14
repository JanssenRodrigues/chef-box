import { boloDeChocolate, strogonoffDeFrango, tabule } from "../mocks/revenues";

export default function handler(req, res) {
  switch (req.query.id) {
    case "strogonoff-de-frango":
      res.json(strogonoffDeFrango);
      break;
    case "bolo-de-chocolate":
      res.json(boloDeChocolate);
      break;
    case "tabule":
      res.json(tabule);
      break;
    default:
      res.status(404);
      return;
  }
}
