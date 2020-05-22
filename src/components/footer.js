import React from "react"
import { rhythm, scale } from '../utils/typography'

export default () => ( 
    <div
        style = {{
            
        }}
    >
        <footer 
            style = {{
                maxWidth: rhythm(25),
                padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
                minHeight: '5vh',
                margin: 'auto',
                textAlign: 'center'
                
            }}
        >
            <p
                style={{
                    fontSize: rhythm(0.5)
                }}
            >
                Desenvolvido orgulhosamente por&nbsp;
                <a 
                    target = "_blank"
                    href = "https://diadoarauto.com.br"
                    style = {{
                        color: 'orange',
                        boxShadow: 'none',
                    }}
                >
                    <strong>
                        Dia do Arauto
                    </strong>
                </a>
               . Todos os direitos reservados © {new Date().getFullYear()}
            </p>
        </footer>
    </div>
)



