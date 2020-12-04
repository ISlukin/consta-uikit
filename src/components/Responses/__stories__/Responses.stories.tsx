import './Responses.stories.css';

import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { createMetadata } from '../../../utils/storybook';
import { Button } from '../../Button/Button';
import {
  Responses,
  responsesPropName,
  responsesPropNameDefault,
  responsesPropSize,
  responsesPropSizeDefault,
} from '../Responses';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import mdx from './Responses.mdx';

const defaultKnobs = () => ({
  size: select('Size', responsesPropSize, responsesPropSizeDefault),
  name: select('Name', responsesPropName, responsesPropNameDefault),
  title: text('Title', ''),
  description: text('Description', ''),
});

export function Playground() {
  const { size, name, title, description } = defaultKnobs();

  return (
    <Responses
      title={title}
      description={description}
      size={size}
      name={name}
      actions={<Button size="m" view="ghost" label="Вернуться назад" />}
    />
  );
}

export default createMetadata({
  title: 'Components|/Responses',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
