import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Navbar, TextInput, Button } from 'flowbite-react';

export default function Header() {
  const path = useLocation().pathname

  return (
    <Navbar className="bg-green-100 shadow-lg">
      
        {/* Logo Section */}
 
          
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white bg-gradient-to-r from-orange-700 via-white to-green-700 p-2 rounded-lg shadow-lg shadow-gray-700"
            >
              My Modern Blog
            </Link>
         


        {/* Search Bar */}
        <form>
          <TextInput
            type="text"
            placeholder="Rechercher ..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          {/* SignIn Button */}
          <Link to="/sign-in">
            <Button gradientMonochrome="success">Se connecter</Button>
          </Link>
          <Navbar.Toggle />
        </div>

        {/* Navbar Links */}
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} href="/">Home</Navbar.Link>
          <Navbar.Link active={path === "/about"} href="/about">About</Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  );
}
