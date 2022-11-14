import { boloDeChocolate, strogonoffDeFrango, tabule } from "./mocks/revenues";

export default function handler(req, res) {
  const revenues = [boloDeChocolate, strogonoffDeFrango, tabule];
  res.json(revenues);
}
