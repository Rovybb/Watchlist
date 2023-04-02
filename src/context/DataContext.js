import { createContext, useState, useEffect, useRef } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [query, setQuery] = useState('');
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState('');

    const API_KEY = '1b3521fef118c9e8c827fb69b98d3b3a';
    const { data, fetchError, isLoading } = useAxiosFetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&query=${query}`);

    useEffect(() => {
        setResults(data.results);
        setTotalPages(data.total_pages);
    }, [data]);

    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem('watchList')));
    }, [setWatchList]);

    useEffect(() => {
    if(localStorage.getItem('darkTheme') == null) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setDarkTheme(e.matches ? true : false));
        
        setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false);
        
        return () => {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
        }
    } else {
        setDarkTheme(localStorage.getItem('darkTheme') === 'true');
    }
    }, [setDarkTheme]);

    const autoScrollRef = useRef(null);
    const handleAutoScroll = () => autoScrollRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    const handleAddToList = (id) => {
        let currentList = JSON.parse(localStorage.getItem('watchList'));
        if(!currentList) {
            localStorage.setItem('watchList', JSON.stringify([]));
            currentList = JSON.parse(localStorage.getItem('watchList'));
        }
        if(!currentList.find(movie => movie.id === id)) {
            const newMovie = {
                id,
                backdrop_path: results.find(movie => movie.id === id).backdrop_path,
                title: results.find(movie => movie.id === id).title,
                overview: results.find(movie => movie.id === id).overview,
                popularity: results.find(movie => movie.id === id).popularity,
                release_date: results.find(movie => movie.id === id).release_date,
                vote_average: results.find(movie => movie.id === id).vote_average
            };
            const newList = currentList;
            newList.unshift(newMovie);
            localStorage.setItem('watchList', JSON.stringify(newList));
            setWatchList(newList);
        }
        setPopupText('Added');
        setShowPopup(true);
        setTimeout(() => {
            setPopupText('');
            setShowPopup(false);
        }, 3000);
    };

    const handleDelete = (id) => {
        const currentList = JSON.parse(localStorage.getItem('watchList'));
        const newList = currentList.filter(movie => movie.id !== id);
        localStorage.setItem('watchList', JSON.stringify(newList));
        setWatchList(newList);
        setPopupText('Removed');
        setShowPopup(true);
        setTimeout(() => {
            setPopupText('');
            setShowPopup(false);
        }, 3000);
    }

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme);
        localStorage.setItem('darkTheme', !darkTheme);
    }

    return (
        <DataContext.Provider value={{
            darkTheme, setDarkTheme, handleThemeChange,
            query, setQuery,
            searchText, setSearchText,
            results, setResults,
            watchList, setWatchList,
            currentPage, setCurrentPage,
            totalPages,
            handleAddToList,
            handleDelete,
            fetchError, isLoading,
            showPopup, setShowPopup,
            popupText,
            autoScrollRef, handleAutoScroll
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;