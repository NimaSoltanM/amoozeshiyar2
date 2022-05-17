import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'allItems.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default (req, res) => {
  if (req.method === 'POST') {
    const { id, title, price, image } = req.body.item;

    const newItem = {
      id,
      title,
      price,
      image,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newItem);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Item added to cart' });
  }

  if (req.method === 'GET') {
    res.status(200).json({ message: 'Shit is working dude, dont worry' });
  }
};
