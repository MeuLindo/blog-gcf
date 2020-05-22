import React from "react"
import { rhythm, scale } from '../utils/typography'

export default () => ( 
    <div
        style = {{
            background: 'linear-gradient(-45deg, rgb(38, 44, 65) 0%, rgb(70, 80, 122) 100%)',
            minHeight: rhythm(10),
            position: "relative",
        }}
    >
        <footer 
            style = {{
                
                maxWidth: rhythm(25),
                minHeight: '5vh',
                margin: 'auto',
                textAlign: 'center',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                color: 'white',
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



