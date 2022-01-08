// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {


    const rdes = fetch(`https://www.aleemrehmtulla.com/my.json`)

    console.log(rdes);

  res.status(200).json({ name: 'Jon Doe' })
}


// This gets called on every request





