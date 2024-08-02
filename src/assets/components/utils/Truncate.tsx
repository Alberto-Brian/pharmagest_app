interface TruncateProps {
    text: string,
    limit: number,
    symbol?: string
}

const Truncate: React.FC<TruncateProps> =  ({text, limit, symbol}) => {
    if(text?.length <= limit){
        return text
    }
    

    if(symbol){
        if(parseInt(text) > 9) return 9 + symbol
        return text?.substring(0, limit) + symbol
    };
    return text?.substring(0, limit) + '...';
}

export default Truncate