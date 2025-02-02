import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import SignIn from 'pages/signin';

const Student = lazy(() => import('pages/Student'));
const Teacher = lazy(() => import('pages/Teacher'));
const HotCollege = lazy(() => import('pages/Student/HotCollege'));
const Share = lazy(() => import('pages/Student/Share'));
const Leader = lazy(() => import('pages/Student/Leader'));
const Choice = lazy(() => import('pages/Student/Choice'));
const Questionnaire = lazy(() => import('pages/Student/Questionnaire'));
const Welcome = lazy(() => import('pages/Student/Welcome'));
const College = lazy(() => import('pages/Student/College'));
const Previous = lazy(() => import('pages/Student/Previous'));
const Message = lazy(() => import('pages/Teacher/PredictResult'));
const UncommittedPage = lazy(() => import('pages/Teacher/UnCommitted'));
const StudentInfo = lazy(() => import('pages/Teacher/StudentInfo'));

const Mine = lazy(() => import('pages/Student/Mine'));
const Lib = lazy(() => import('pages/Student/Mine/Lib/Lib'));
const Same = lazy(() => import('pages/Student/Mine/Same/Same'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/student/*',
    element: <Student />,
    children: [
      {
        path: '',
        element: <Choice />
      },
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'questionnaire',
        element: <Questionnaire />
      },
      {
        path: 'college/:isCqupt',
        element: <College />
      },
      {
        path: 'hotCollege',
        element: <HotCollege />
      },
      {
        path: 'previous',
        element: <Previous />
      },
      {
        path: 'share',
        element: <Share />
      },
      {
        path: 'leader',
        element: <Leader />
      },
      {
        path: 'mine/*',
        element: <Mine />,
        children: [
          {
            path: 'lib',
            element: <Lib />
          },
          {
            path: 'Same',
            element: <Same />
          },
          {
            path: '*',
            element: <Navigate to="lib" replace={true} />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to="" replace={true} />
      }
    ]
  },
  {
    path: '/teacher/*',
    element: <Teacher />,
    children: [
      {
        path: 'predictresult',
        element: <Message />
      },
      {
        path: 'uncommitted',
        element: <UncommittedPage />
      },
      {
        path: 'studentInfo',
        element: <StudentInfo />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
];

export default routes;
