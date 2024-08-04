import React, { useEffect, useState } from 'react';
import { message, Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AddRestaurantForm } from './AddRestaurantForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurants } from '../redux/selectors';
import RestaurantItem from './RestaurantItem'; // Adjust the import path as needed
import { fetchRestaurants, addRestaurant, editRestaurant, handleDeleteRestaurant } from '../redux/actions/restaurantActions';

const styles = {
    container: {
        padding: '10px',
    },
    noRestaurantsMessage: {
        fontSize: '1.25rem',
        color: '#555',
        textAlign: 'center',
    },
    dropdownContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    dropdownButton: {
        border: 'none',
        borderRadius: '4px',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: 'normal',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer'
    }
};//

const RestaurantList = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurants);
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState({ key: 'name', order: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);


    const gridContainerStyle = restaurants.length
        ? {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginTop: '20px',
            justifyContent: 'center',
        }
        : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            marginTop: '20px',
            gap: '20px',
        };



    const onAddRestaurant = (restaurant) => {
        dispatch(addRestaurant(restaurant));
    };
    const onEditRestaurant = (restaurant) => {
        dispatch(editRestaurant(restaurant));
    };
    const onDeleteRestaurant = (id) => {
        dispatch(handleDeleteRestaurant(id));
    };

    const handleFilterMenuClick = (e) => {
        const { key } = e;
        const [type, value] = key.split(':');

        setFilter(prevFilter => ({
            ...prevFilter,
            [type]: value === 'all' ? undefined : value
        }));
    };

    const handleSortMenuClick = (e) => {
        const { key } = e;
        const [sortKey, order] = key.split(':');

        setSort({ key: sortKey, order: order });
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm.toLowerCase());
    };

    const filterMenu = (
        <Menu onClick={handleFilterMenuClick}>
            <Menu.Item key="location:all">All Locations</Menu.Item>
        </Menu>
    );

    const sortMenu = (
        <Menu onClick={handleSortMenuClick}>
            <Menu.Item key="name:asc">Name: A to Z</Menu.Item>
            <Menu.Item key="name:desc">Name: Z to A</Menu.Item>
            <Menu.Item key="reviews:asc">Reviews: Low to High</Menu.Item>
            <Menu.Item key="reviews:desc">Reviews: High to Low</Menu.Item>
        </Menu>
    );

    const filteredRestaurants = restaurants.filter(restaurant => {
        return (
            (!filter.location || restaurant.location === filter.location) &&
            (!filter.cuisine || restaurant.cuisine === filter.cuisine) &&
            (restaurant.name.toLowerCase().includes(searchTerm) || restaurant.location.toLowerCase().includes(searchTerm))
        );
    });

    const sortedRestaurants = filteredRestaurants.sort((a, b) => {
        const sortBy = sort.key;
        const order = sort.order === 'asc' ? 1 : -1;

        if (sortBy === 'name') {
            return a.name.localeCompare(b.name) * order;
        } else if (sortBy === 'reviews') {
            return (a.numOfReviews - b.numOfReviews) * order;
        }

        return 0;
    });

    return (
        <div style={styles.container}>
            <AddRestaurantForm onFormSubmit={onAddRestaurant} buttonLabel="Add Favourite" onSearch={handleSearch} />
            <div style={styles.dropdownContainer}>
                <Dropdown overlay={filterMenu} trigger={['click']}>
                    <Button style={styles.dropdownButton}>Filter <DownOutlined style={{ marginLeft: '8px' }} /></Button>
                </Dropdown>

                <Dropdown overlay={sortMenu} trigger={['click']}>
                    <Button style={styles.dropdownButton}>Sort <DownOutlined style={{ marginLeft: '8px' }} /></Button>
                </Dropdown>
            </div>
            <div style={gridContainerStyle}>
                {restaurants.length === 0 ? (
                    <p style={styles.noRestaurantsMessage}>No restaurants</p>
                ) : (
                    sortedRestaurants.map(restaurant => (
                        <RestaurantItem key={restaurant.id} restaurant={restaurant} onEdit={onEditRestaurant} onDelete={onDeleteRestaurant} />
                    ))
                )}
            </div>
        </div>
    );
};

export default RestaurantList;
