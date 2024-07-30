import { useState, useCallback, useEffect } from 'react';

const useLoadMore = (data, initialCount, incrementCount, options = {}) => {
    const { shouldShuffle = false, shouldReverse = false } = options;
    const [displayedItems, setDisplayedItems] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isFullLoad, setIsFullLoad] = useState(false);

    // 데이터를 수정하는 함수: 섞기 또는 역순 정렬
    const modifyData = useCallback((items) => {
        let modifiedItems = [...items];
        if (shouldShuffle) {
            for (let i = modifiedItems.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [modifiedItems[i], modifiedItems[j]] = [modifiedItems[j], modifiedItems[i]];
            }
        }
        if (shouldReverse) {
            modifiedItems.reverse();
        }
        return modifiedItems;
    }, [shouldShuffle, shouldReverse]);

    // 초기 아이템 로드
    const loadInitialItems = useCallback(() => {
        let initialItems = modifyData(data.slice(0, initialCount));
        setDisplayedItems(initialItems);
        setLoadedCount(initialItems.length);
        setIsFullLoad(initialItems.length === data.length);
    }, [data, initialCount, modifyData]);

    // 더 많은 아이템 불러오기
    const loadMoreItems = useCallback(() => {
        const nextIndex = loadedCount + incrementCount <= data.length ? loadedCount + incrementCount : data.length;
        const nextItems = modifyData(data.slice(loadedCount, nextIndex));
        setDisplayedItems(prevItems => [...new Set([...prevItems, ...nextItems.map(item => item.id)])]);
        setLoadedCount(prevCount => prevCount + nextItems.length);
        setIsFullLoad(loadedCount + nextItems.length === data.length);
    }, [data, loadedCount, incrementCount, modifyData]);

    // 아이템 리셋
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
