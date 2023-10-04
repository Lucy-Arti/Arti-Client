import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const Search = () => {
    const searchBox = css`
        display: flex;
        width: 80%;
        height: 3rem;
        background-color: rgba(245, 245, 245, 1);
        border-radius: 10px;
    `
    const inputText = useRef<HTMLInputElement>(null);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    }
  return (
    <>
    <div className="headerLayout" css={css`
        gap: 2rem;
    `}>
        <FiChevronLeft cursor="pointer" size="26px" onClick={() => history.back()} />
        <div css={searchBox}>
            <input css={css`
                width: 87%;
                background-color: transparent;
                border: none;
                outline: none;
                margin-left: 1rem;
            `} ref={inputText} />
            <img src="/img/search.svg" onClick={handleClick} />
        </div>
    </div>
    <div>
        {
            (isClicked === true) && (inputText.current?.value !== '') && 
            <div>
                {inputText.current?.value} 에 대한 검색결과
            </div>
            
        }
    </div>
    </>
  )
}

export default Search