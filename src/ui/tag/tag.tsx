import './styles.tag.scss';
import clsx from 'clsx';

type Tag = {
    value: number;
    selected: boolean;
};

export const Tag = ({ value, selected }: Tag) => {
    return <div className={clsx('tag-wrapper', selected && 'tag-wrapper-selected')}>{value}%</div>;
};
