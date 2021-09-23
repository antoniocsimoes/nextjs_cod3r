// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Teste API' ,
    metodo: req.method,
    //params: JSON.stringify(req.query)
    nome: req.query.nome,
    idade: +req.query.idade // o "+" transforma uma string em número
  })
}
