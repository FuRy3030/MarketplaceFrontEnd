const GetClassNameForHeadlineWord: (CurrIndex: number, ElementIndex: number) => string = 
    (CurrIndex: number, ElementIndex: number) => {
        if (CurrIndex === ElementIndex) {
            return 'WordAppear';
        }
        else if ((CurrIndex === 2 && ElementIndex === 1) ||
            (CurrIndex === 1 && ElementIndex === 0) ||
            (CurrIndex === 0 && ElementIndex === 2)) 
        {
            return 'WordDisappear';
        }
        else {
            return 'WordInvisible';
        }
    };

export default GetClassNameForHeadlineWord;