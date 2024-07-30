import { useState, useCallback, useEffect } from 'react';

const useLoadMore = (data, initialCount, incrementCount, shouldShuffle = false) => {
    const [displayedItems, setDisplayedItems] = useState([]); // 화면에 보여줄 아이템들을 저장하는 곳
    const [loadedCount, setLoadedCount] = useState(0); // 지금까지 몇 개의 아이템을 불러왔는지 세는 변수
    const [isFullLoad, setIsFullLoad] = useState(false); // 모든 아이템을 불러왔는지 알려주는 표시

    // 배열의 순서를 섞는 함수
    const shuffleData = useCallback((items) => {
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        return items;
    }, []);

    // 초기에 아이템들을 불러오는 함수
    const loadInitialItems = useCallback(() => {
        let initialItems = data.slice(0, initialCount); // 데이터에서 처음부터 정해진 개수만큼 아이템을 가져옴
        if (shouldShuffle) {
            initialItems = shuffleData([...initialItems]); // 필요하다면 아이템의 순서를 섞음
        }
        setDisplayedItems(initialItems); // 화면에 보여줄 아이템들을 설정
        setLoadedCount(initialItems.length); // 몇 개를 불러왔는지 설정
        setIsFullLoad(initialItems.length === data.length); // 모든 데이터를 불러왔는지 확인
    }, [data, initialCount, shouldShuffle, shuffleData]);

    // 컴포넌트가 처음 로드될 때 초기 아이템을 불러옴
    useEffect(() => {
        loadInitialItems();
    }, [loadInitialItems]);

    // 더 많은 아이템을 불러오는 함수
    const loadMoreItems = useCallback(() => {
        const nextIndex = loadedCount + incrementCount <= data.length ? loadedCount + incrementCount : data.length;
        const nextItems = data.slice(loadedCount, nextIndex); // 다음에 불러올 아이템을 선택
        setDisplayedItems(prevItems => [...new Set([...prevItems, ...nextItems.map(item => item.id)])]); // 중복을 피하면서 새 아이템을 추가
        setLoadedCount(prevCount => prevCount + nextItems.length); // 불러온 아이템 수 업데이트
        setIsFullLoad(loadedCount + nextItems.length === data.length); // 모든 아이템을 불러왔는지 확인
    }, [data, loadedCount, incrementCount]);

    // 아이템들을 초기 상태로 리셋하는 함수
    const resetItems = useCallback(() => {
        loadInitialItems();
    }, [loadInitialItems]);

    return {
        displayedItems,
        loadMoreItems,
        resetItems,
        isFullLoad,
        loadedCount
    };
};

export default useLoadMore;
