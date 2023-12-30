import React from 'react'; // Import React
import { promises as fs } from 'fs';
import Questions from '@/components/question';

const file = await fs.readFile(process.cwd() + '/questions.json', 'utf8');
const data = JSON.parse(file);

export default function Home() {
  return (
    <div className='slice bg-light-pink flex items-center'>
      <div className="wrapper card bg-white">
        <div className='row'>
          <div className='col '>
            <h1>FAQs</h1>
            <div className='questions'>
              {data.questions.map((question, index) => (
                <div className='question' key={index}>
                  <Questions question={question} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
