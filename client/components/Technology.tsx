import './Technology.css'

import logoCss from '../images/technology/css.svg'
import logoGit from '../images/technology/git.svg'
import logoHtml from '../images/technology/html.svg'

import logoJavascript from '../images/technology/javascript.svg'
import logoNodejs from '../images/technology/nodejs.svg'
import logoPostgres from '../images/technology/Postgresql_elephant.svg'
import logoReact from '../images/technology/react.svg'
import logoTypescript  from '../images/technology/typescript.svg'
import logoUbuntu from '../images/technology/ubuntu.svg'
import logoVscode from '../images/technology/vscode.svg'

console.log("logoCss : ", logoCss ) //{`${logoCss}`}

export default function Technology() {
    return (
        <>
            <div className='technology' id='technology'>
                <div className='container'>
                    <div className='row-1'>
                        <h2>Technology</h2>
                        <span className='line'></span>
                        <div className='content'>
                            <div className='image'>
                                <img src={`${logoCss}`} alt='css' />
                            </div>
                            <div className='image'>
                                <img src={`${logoGit}`} alt='git' />
                            </div>
                            <div className='image'>
                                <img src={`${logoHtml}`} alt='html' />
                            </div>
                            <div className='image'>
                                <img src={`${logoJavascript}`} alt='javascript' />
                            </div>
                            <div className='image'>
                                <img src={`${logoNodejs}`} alt='nodejs' />
                            </div>
                            <div className='image'>
                                <img src={`${logoPostgres}`} alt='postgres' />
                            </div>
                            <div className='image'>
                                <img src={`${logoReact}`} alt='react' />
                            </div>
                            <div className='image'>
                                <img src={`${logoTypescript}`} alt='typescript' />
                            </div>
                            <div className='image'>
                                <img src={`${logoUbuntu}`} alt='ubuntu' />
                            </div>
                            <div className='image'>
                                <img src={`${logoVscode}`} alt='vscode' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}