import { QuestionnaireType } from '../types/Questionnaire';

export let hads: QuestionnaireType = {
  title: 'Hospital Anxiety and Depression Scale',
  description: 'Hospital Anxiety and Depression Scale (HADS) is commonly used by doctors to determine the levels ' +
  'of anxiety and depression',
  questions: [
    {
      title: 'I feel tense or "wound up":',
      disorder: 'anxiety',
      variants: [
        {text: 'Most of the time', score: 3},
        {text: 'A lot of the time', score: 2},
        {text: 'From time to time, occasionally', score: 1},
        {text: 'Not at all', score: 0},
      ]
    },
    {
      title: 'I still enjoy the things I used to enjoy:',
      disorder: 'depression',
      variants: [
        {text: 'Definitely as much', score: 0},
        {text: 'Not quite so much', score: 1},
        {text: 'Only a little', score: 2},
        {text: 'Hardly at all', score: 3},
      ]
    },
    {
      title: 'I get a sort of frightened feeling as if something awful is about to happen:',
      disorder: 'anxiety',
      variants: [
        {text: 'Very definitely and quite badly', score: 3},
        {text: 'Yes, but not too badly', score: 2},
        {text: 'A little, but it doesn\'t worry me', score: 1},
        {text: 'Not at all', score: 0},
      ]
    },
    {
      title: 'I can laugh and see the funny side of things:',
      disorder: 'depression',
      variants: [
        {text: 'As much as I always could', score: 0},
        {text: 'Not quite so much now', score: 1},
        {text: 'Definitely not so much now', score: 2},
        {text: 'Not at all', score: 3},
      ]
    },
    {
      title: 'Worrying thoughts go through my mind:',
      disorder: 'anxiety',
      variants: [
        {text: 'A great deal of the time', score: 3},
        {text: 'A lot of the time', score: 2},
        {text: 'From time to time, but not too often', score: 1},
        {text: 'Only occasionally', score: 0},
      ]
    },
    {
      title: 'I feel cheerful:',
      disorder: 'depression',
      variants: [
        {text: 'Not at all', score: 3},
        {text: 'Not often', score: 2},
        {text: 'Sometimes', score: 1},
        {text: 'Most of the time', score: 0},
      ]
    },
    {
      title: 'I can sit at ease and feel relaxed:',
      disorder: 'anxiety',
      variants: [
        {text: 'Definitely', score: 0},
        {text: 'Usually', score: 1},
        {text: 'Not Often', score: 2},
        {text: 'Not at all', score: 3},
      ]
    },
    {
      title: 'I feel as if I am slowed down:',
      disorder: 'depression',
      variants: [
        {text: 'Nearly all the time', score: 3},
        {text: 'Very often', score: 2},
        {text: 'Sometimes', score: 1},
        {text: 'Not at all', score: 0},
      ]
    },
    {
      title: 'I get a sort of frightened feeling like \'butterflies\' in the stomach:',
      disorder: 'anxiety',
      variants: [
        {text: 'Not at all', score: 0},
        {text: 'Occasionally', score: 1},
        {text: 'Quite Often', score: 2},
        {text: 'Very Often', score: 3},
      ]
    },
    {
      title: 'I have lost interest in my appearance:',
      disorder: 'depression',
      variants: [
        {text: 'Definitely', score: 3},
        {text: 'I don\'t take as much care as I should', score: 2},
        {text: 'I may not take quite as much care', score: 1},
        {text: 'I take just as much care as ever', score: 0},
      ]
    },
    {
      title: 'I feel restless as I have to be on the move:',
      disorder: 'anxiety',
      variants: [
        {text: 'Very much indeed', score: 3},
        {text: 'Quite a lot', score: 2},
        {text: 'Not very much', score: 1},
        {text: 'Not at all', score: 0},
      ]
    },
    {
      title: 'I look forward with enjoyment to things:',
      disorder: 'depression',
      variants: [
        {text: 'As much as I ever did', score: 0},
        {text: 'Rather less than I used to', score: 1},
        {text: 'Definitely less than I used to', score: 2},
        {text: 'Hardly at all', score: 3},
      ]
    },
    {
      title: 'I get sudden feelings of panic:',
      disorder: 'anxiety',
      variants: [
        {text: 'Very often indeed', score: 3},
        {text: 'Quite often', score: 2},
        {text: 'Not very often', score: 1},
        {text: 'Not at all', score: 0},
      ]
    },
    {
      title: 'I can enjoy a good book or radio or TV program:',
      disorder: 'depression',
      variants: [
        {text: 'Often', score: 0},
        {text: 'Sometimes', score: 1},
        {text: 'Not often', score: 2},
        {text: 'Very seldom', score: 3},
      ]
    },
  ],
  interpretations: [
    {
      disorder: 'anxiety',
      scores: [0, 7],
      description: 'Normal.'
    },
    {
      disorder: 'anxiety',
      scores: [8, 10],
      description: 'Borderline abnormal.'
    },
    {
      disorder: 'anxiety',
      scores: [11, 21],
      description: 'Abnormal.'
    },
    {
      disorder: 'depression',
      scores: [0, 7],
      description: 'Normal.'
    },
    {
      disorder: 'depression',
      scores: [8, 10],
      description: 'Borderline abnormal.'
    },
    {
      disorder: 'depression',
      scores: [11, 21],
      description: 'Abnormal.'
    },
  ]
};