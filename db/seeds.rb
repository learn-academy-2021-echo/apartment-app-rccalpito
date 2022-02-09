# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartments = [
    {
        street: '3975 Utah St',
        city: 'San Diego',
        state: 'CA',
        manager: 'Jenny from the block',
        email: 'jenny@capitalasset.com',
        price: '2375$',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'No',
        user_id: '1',
    },
    {
        street: '9500 Gilman Dr',
        city: 'San Diego',
        state: 'CA',
        manager: 'Chancellor Khosla',
        email: 'chancey_k@ucsd.edu',
        price: '200,000,000$',
        bedrooms: '100',
        bathrooms: '3',
        pets: 'No',
        user_id: '1',
    },
    {
        street: '8437 N Paula',
        city: 'Fresno',
        state: 'CA',
        manager: 'Robert Calpito',
        email: 'rfcalpito@gmail.com',
        price: '4000$',
        bedrooms: '4',
        bathrooms: '3.5',
        pets: 'No',
        user_id: '1',
    },
]

users = [
    {
        email: '',
        encrypted_password: '',
    }
]