{

/* JSON
//- Request -
{
    "topicId": 5,
    "status": "published" // "draft",  "deleted". - optional
}


// Response 
[
    {
        "question": "How is going delivery?",
        "answer": "Fast!",
        "tag": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]
*/

enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}

type Question = {
    question: string,
    answer: string,
    tag: Array<string>, // string[]
    likes: number,
    status?: QuestionStatus // ? - optional
}

type QuestionRequest = {
    topicId: number;
    status: QuestionStatus
}

async function getFaqs(req: QuestionRequest): Promise<Question[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
 });

    const data = await res.json();

    return data;
}
}