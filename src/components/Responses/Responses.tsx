import './Responses.css';

import React from 'react';

import { cn } from '../../utils/bem';
import { Text } from '../Text/Text';

import ResponsesImage403 from './Images/ResponsesImage403';
import ResponsesImage404 from './Images/ResponsesImage404';
import ResponsesImage500 from './Images/ResponsesImage500';
import ResponsesImage503 from './Images/ResponsesImage503';
import ResponsesImageConnectionError from './Images/ResponsesImageConnectionError';
import ResponsesImageDeleted from './Images/ResponsesImageDeleted';
import ResponsesImageEmptyBox from './Images/ResponsesImageEmptyBox';
import ResponsesImageEmptyPockets from './Images/ResponsesImageEmptyPockets';
import ResponsesImageNothingFound from './Images/ResponsesImageNothingFound';
import ResponsesImageSuccess from './Images/ResponsesImageSuccess';

export const responsesPropSize = ['l', 'm'] as const;
export type ResponsesPropSize = typeof responsesPropSize[number];
export const responsesPropSizeDefault: ResponsesPropSize = responsesPropSize[0];

export const responsesPropName = [
  '404',
  '403',
  '500',
  '503',
  'nothingFound',
  'deleted',
  'success',
  'emptyBox',
  'emptyPockets',
  'connectionError',
] as const;
export type ResponsesPropName = typeof responsesPropName[number];
export const responsesPropNameDefault: ResponsesPropName = responsesPropName[0];

type Props = {
  loading?: boolean;
  title?: string;
  description?: any; // какой тип, если может быть не только строка, но и ссылка в этой строке?
  size?: ResponsesPropSize;
  name?: ResponsesPropName;
  image?: any; // svg, png или какой-то компонент
  actions?: any; // любые кнопки и любое количество кнопок
  className?: string;
  children?: never;
};

// это шаблоны ошибок
const responseTemplates = [
  {
    name: '403',
    image: <ResponsesImage403 />,
    title: 'Нет доступа',
    description: (
      <>
        {'Если вы уверены, что вам нужна эта страница, запросите доступ у '}
        <Text as="a" view="link">
          администратора
        </Text>
      </>
    ),
  },
  {
    name: '404',
    image: <ResponsesImage404 />,
    title: 'Страница не найдена',
    description: 'Возможно эту страницу уже удалили или вы воспользовались устаревшей ссылкой',
  },
  {
    name: '500',
    image: <ResponsesImage500 />,
    title: 'Ошибка сервера',
    description:
      'Произошла ошибка на стороне сервера. Попробуйте обновить страницу или прийти позже',
  },
  {
    name: '503',
    image: <ResponsesImage503 />,
    title: 'Сервис недоступен',
    description:
      'Что-то пошло не так. Сейчас сервис недоступен. Скорее всего, мы уже работаем над решением этой проблемы',
  },
  {
    name: 'nothingFound',
    image: <ResponsesImageNothingFound />,
    title: 'Ничего не найдено',
    description: 'Перефразируйте ваш запрос',
  },
  {
    name: 'deleted',
    image: <ResponsesImageDeleted />,
    title: '*Что-то* удалено',
    description: '*Что-то* успешно удалено',
  },
  {
    name: 'success',
    image: <ResponsesImageSuccess />,
    title: 'Успех!',
    description: '*Что-то* успешно выполнено',
  },
  {
    name: 'emptyBox',
    image: <ResponsesImageEmptyBox />,
    title: 'Здесь пока ничего нет',
    description: 'Будьте первым, добавьте скважину',
  },
  {
    name: 'emptyPockets',
    image: <ResponsesImageEmptyPockets />,
    title: 'Здесь пока ничего нет',
    description: 'Будьте первым, добавьте скважину',
  },
  {
    name: 'connectionError',
    image: <ResponsesImageConnectionError />,
    title: 'Проблемы с загрузкой',
    description: 'Какие-то проблемы со связью. Обновите страницу.',
  },
];

export const cnResponses = cn('Responses');

export const Responses = React.forwardRef<HTMLDivElement, Props>((props) => {
  const {
    className,
    title,
    description,
    size = responsesPropSizeDefault,
    name = responsesPropNameDefault,
    image,
    actions,
  } = props;

  const errorTemplate = responseTemplates.filter((i) => i.name === name)[0];

  return (
    <div className={cnResponses({ size }, [className])}>
      {image && <div className={cnResponses('Image')}>{image}</div>}
      {!image && name && <div className={cnResponses('Image')}>{errorTemplate.image}</div>}

      {title && <h1 className={cnResponses('Title')}>{title}</h1>}
      {!title && name && <h1 className={cnResponses('Title')}>{errorTemplate.title}</h1>}

      {description && <p className={cnResponses('Description')}>{description}</p>}
      {!description && name && (
        <p className={cnResponses('Description')}>{errorTemplate.description}</p>
      )}

      {actions && <div className={cnResponses('ButtonsWrapper')}>{actions}</div>}
    </div>
  );
});
