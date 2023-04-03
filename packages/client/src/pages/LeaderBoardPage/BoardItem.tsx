import medalIcon from 'assets/icons/medal.svg';

import { BoardItemProps } from './types';
import { StPlayer, StAvatar } from './style';


const BoardItem: React.FC<BoardItemProps> = ({ place, name, avatar, score, time }) => (
    <>
        <div>{ place }</div>
        <StPlayer>
            <StAvatar image={avatar} label={place === 1 ? medalIcon : undefined} />
            { name }
        </StPlayer>
        <div>{ time }</div>
        <div>{ score }</div>
    </>
);

export default BoardItem;
