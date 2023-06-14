import React from 'react';
import opa from '../../images/OPA_Logo_RGB_1.png';
import './HeroSection.css'

export const HeroSection = () => {
  return (
    <header className='hero-container'>
        <div className="hero-left">
            <img src={opa} alt="logo Oral Pathology Academy" className='hero-logo' />
        </div>
        <div className="hero-right">
            <h1 className='hero-title'>Academia de patologia oral inovadora em Portugal</h1>
            <h3 className="hero-subtitle">Capacitamos Médicos da área de saúde oral a identificar e tratar as lesões da cavidade oral</h3>
            <div className="hero-CTA">
                <button className="hero-CTA-btn">Inscreva-se já!</button>
                <p className="hero-CTA-text">As vagas estão prestes a terminar, apenas 5% encontram-se disponíveis</p>
            </div>

        </div>
    </header>
  )
}
