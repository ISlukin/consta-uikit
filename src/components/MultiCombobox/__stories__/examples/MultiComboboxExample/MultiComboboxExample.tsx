import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { MultiCombobox } from '../../../MultiCombobox';

type SelectOption = {
  label: string;
  value: string;
};

const items = [
  { label: 'Синий', value: 'blue' },
  { label: 'Белый', value: 'white' },
  { label: 'Красный', value: 'red' },
  { label: 'Черный', value: 'black' },
  { label: 'Зеленый', value: 'green' },
  { label: 'В полосочку', value: 'stripe' },
];

export const MultiComboboxExampleText = () => {
  const getItemLabel = (option: SelectOption): string => option.label;
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <p>Цвет фона</p>
      <MultiCombobox
        id="colors"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Выберите цвет"
        size="s"
      />
    </StoryBookExample>
  );
};

export const MultiComboboxExampleSize = () => {
  const getItemLabel = (option: SelectOption): string => option.label;
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <MultiCombobox
        id="city"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Ваш выбор S"
        size="s"
      />
      <MultiCombobox
        id="city"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Ваш выбор M"
        size="m"
      />
      <MultiCombobox
        id="city"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Ваш выбор L"
        size="l"
      />
    </StoryBookExample>
  );
};

export const MultiComboboxExampleForm = () => {
  const getItemLabel = (option: SelectOption): string => option.label;
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <MultiCombobox
        id="color"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Default"
        form="default"
      />
      <MultiCombobox
        id="color"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Brick"
        form="brick"
      />
      <MultiCombobox
        id="color"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Round"
        form="round"
      />
    </StoryBookExample>
  );
};

export const MultiComboboxExampleView = () => {
  const getItemLabel = (option: SelectOption): string => option.label;
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <MultiCombobox
        id="city"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Default"
        view="default"
      />
      <MultiCombobox
        id="city"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Clear"
        view="clear"
      />
      <MultiCombobox
        id="city"
        options={items}
        getOptionLabel={getItemLabel}
        placeholder="Disabled"
        disabled
      />
    </StoryBookExample>
  );
};
