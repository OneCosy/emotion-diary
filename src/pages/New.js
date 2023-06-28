import { useEffect } from 'react';
import DiaryEditor from "../components/DiaryEditor";

const getStringDate = (date) => {
    // toISOString() : YYYY-MM-DDTHH:mm:ss.sssZ로 반환해주기 때문에
    // slice()를 이용해 0자리부터 9자리까지(YYYY - MM - DD) 잘라서 반환
    return date.toISOString().slice(0, 10);
};

const New = () => {

    useEffect(() => {
        const titleElement = document.getElementsByTagName("title")[0];
        titleElement.innerHTML = `감정 일기장 - 새 일기`;
    }, []);

    return (
        <div>
            <DiaryEditor />
        </div>
    );
};

export default New;
