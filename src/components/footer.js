import React from "react"
import { rhythm, scale } from '../utils/typography'

export default () => ( 
    <div>
        <footer 
            style = {{
                textAlign: 'center',
                padding: `0 20px 80px 0`,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            <p>
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
                        Dia do Arauto. 
                    </strong>
                </a>
                Todos os direitos reservados © {new Date().getFullYear()}
            </p>
        </footer>
    </div>
)



