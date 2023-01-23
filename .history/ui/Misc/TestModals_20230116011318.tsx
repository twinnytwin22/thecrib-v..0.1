'use client'
import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";
import Trophy from "public/assets/newbgdark.png";
import Gift from "public/assets/newbgdark.png";



const TestModals = ({isVisible, onClose, children}):{isVisible: boolean} => {
 if (isVisible) return null;
 const handleClose = (e: any) => {
     if e.target.id === 'wrapper' ) onClose();
 
 }
}

export default TestModals;
