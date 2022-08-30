import React from 'react'

export default function Footer() {
  return (
    <div className="">
      <div className="brand-logo">
        {/* TODO: reemplazar la imagen por el logo de la empresa */}
        <a href="#" target="_blank" className="text-2xl font-bold">
          <img width="80" height="80" src="https://links.papareact.com/gzs" alt="Trabajemos juntos" /> 
        </a>
      </div>
      <div className="links">
        <span>
          &copy; {new Date().getFullYear()} <a href="#" targer="_blank" className="text-red-700">Mapogo Media</a>. All Rights Reserved
        </span>
      </div>
    </div>
  )
}
