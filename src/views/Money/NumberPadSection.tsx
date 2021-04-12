import React, { useState } from 'react'
import { generateOutput } from './NumberPadSection/generateOutput'
import { Wrapper } from './NumberPadSection/Wrapper'

type Props = {
    value: number,
    onChange: (value: number) => void
    onOK?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
    const [output, _setOutput] = useState(props.value.toString())
    const setOutput = (output: string) => {
        let newOutput: string
        if (output.length > 16) {
            newOutput = output.slice(0, 16)
        } else if (output.length === 0) {
            newOutput = '0'
        } else {
            newOutput = output
        }
        _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) {
            return
        }
        if (text === 'OK') {
            props.onOK && props.onOK()
        }
        if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= -1) {
            setOutput(generateOutput(text, output))
        }
        // switch (text) {
        //     case '0':
        //     case '1':
        //     case '2':
        //     case '3':
        //     case '4':
        //     case '5':
        //     case '6':
        //     case '7':
        //     case '8':
        //     case '9':
        //         if(output==='0'){
        //             setOutput(text)
        //         }else{
        //             setOutput(output+text)
        //         }
        //         break
        //     case '删除':
        //         if(output.length===1){
        //             setOutput('')
        //         }else{
        //             setOutput(output.slice(0,-1))
        //         }
        //         break
        //     case '清空':
        //         setOutput('')
        //         break
        //     case '.':
        //         if(output.includes('.')){return}
        //         setOutput(output+'.')
        //         break;
        //     case 'OK':
        //         break
        // }

    }
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}
export { NumberPadSection }