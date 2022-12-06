import express from 'express';
const router = express.Router();

let posts = [
  {
    id: '1',
    topic: 'Test topic of post',
    text: 'Lorem ipsum 111',
  },
  {
    id: 'a',
    topic: 'Test topic of post',
    text: 'Lorem ipsum 222',
  },
  {
    id: '3',
    topic: 'Test topic of post',
    text: 'Lorem ipsum 333',
  },
];

router.get('/', (req, res) => res.json({ posts }));

router.get('/:id', (req, res) => {
  const [post] = posts.filter(({ id }) => id === req.params.id);
  res.json({ post });
});

router.post('/', (req, res) => {
  const { topic, text } = req.body;
  posts.push({ id: new Date().getTime().toString(), topic, text });
  res.json({ status: 'succes' });
});

router.put('/:id', (req, res) => {
  const { topic, text } = req.body;

  posts.forEach(post => {
    if (post.id === req.params.id) {
      (post.topic = topic), (post.text = text);
    }
  });
  res.json({ status: 'success' });
});

router.delete('/:id', (req, res) => {
  posts = posts.filter(post => post.id !== req.params.id) 
  
  res.json({status:"success"})
});

export { router as postRouter };
