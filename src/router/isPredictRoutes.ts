import { lazy } from 'react';
const HotCollege = lazy(() => import('pages/Student/HotCollege'));
const Share = lazy(() => import('pages/Student/Share'));
const Leader = lazy(() => import('pages/Student/Leader'));
const Choice = lazy(() => import('pages/Student/Choice'));
const Questionnaire = lazy(() => import('pages/Student/Questionnaire'));
const Welcome = lazy(() => import('pages/Student/Welcome'));
const College = lazy(() => import('pages/Student/College'));
const Previous = lazy(() => import('pages/Student/Previous'));
const Mine = lazy(() => import('pages/Student/Mine'));
const Lib = lazy(() => import('pages/Student/Mine/Lib/Lib'));
const Same = lazy(() => import('pages/Student/Mine/Same/Same'));
const hasPredict = localStorage.getItem('useRole')?.includes('predict') ? true : false;
export const isPredictRoutes = [
  {
    key: 'studentIndex',
    path: 'choice',
    role: 'predict',
    element: Choice,
    backUrl: hasPredict ? '/student/choice' : '/student/welcome'
  },
  {
    key: 'hotCollege',
    path: 'hotCollege',
    role: 'predict',
    element: HotCollege,
    backUrl: hasPredict ? '/student/choice' : '/student/welcome'
  },
  {
    key: 'college',
    path: 'college/:isCqupt',
    role: 'predict',
    element: College,
    backUrl: hasPredict ? '/student/choice' : '/student/welcome'
  },
  {
    key: 'previous',
    path: 'previous',
    role: '',
    element: Previous,
    backUrl: hasPredict ? '/student/choice' : '/student/welcome'
  },
  {
    key: 'share',
    path: 'share',
    role: '',
    element: Share,
    backUrl: hasPredict ? '/student/choice' : '/student/welcome'
  },
  {
    key: 'leader',
    path: 'leader',
    role: '',
    element: Leader,
    backUrl: hasPredict ? '/student/choice' : '/student/welcome'
  },
  {
    key: 'mine',
    path: 'mine/*',
    element: Mine,
    role: 'predict',
    backUrl: hasPredict ? '/student/choice' : '/student/welcome',
    children: [
      {
        key: 'mineLib',
        path: 'lib',
        role: 'predict',
        element: Lib,
        backUrl: hasPredict ? '/student/choice' : '/student/welcome'
      },
      {
        key: 'mineSame',
        path: 'Same',
        role: 'predict',
        element: Same,
        backUrl: hasPredict ? '/student/choice' : '/student/welcome'
      },
      {
        key: 'mineIndex',
        path: '*',
        role: 'predict',
        element: Lib,
        backUrl: hasPredict ? '/student/choice' : '/student/welcome'
      }
    ]
  },
  {
    key: 'welcome',
    path: 'welcome',
    element: Welcome,
    role: 'unPredict',
    backUrl: '/student/choice'
  },
  {
    key: 'questionnaire',
    path: 'questionnaire',
    element: Questionnaire,
    role: 'unPredict',
    backUrl: '/student/choice'
  }
];
