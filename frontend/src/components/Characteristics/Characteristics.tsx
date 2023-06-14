import React from 'react'
import icontalking from '../../images/icon-talking.png'
import iconprescription from '../../images/icon-prescription.png'
import icontools from '../../images/icon-tools.png'
import './Characteristics.css'

export const Characteristics = () => {
    const characteristics: [string, string][] = [[icontalking, 'Sessões clínicas interativas e discussão de casos clínicos'], [iconprescription, 'Apresentação das patologias orais mais frequentes em consultório'], [icontools, 'Hands-on de biópsias simuladas em cavidade oral']]
    return (
        <section className='char-container'>
            <h2 className="char-title">O que este primeiro curso inclui:</h2>
            <div className="char-topics">
                {characteristics.map(([img, description]) =>
                    <div className="char-individual-topic">
                        <img src={img} alt={description} className='char-img' />
                        <p className="char-description">{description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
