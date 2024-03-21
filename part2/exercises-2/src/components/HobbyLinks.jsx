export default function HobbyLinks() {
  
    let hobby0 = "https://pbs.twimg.com/media/EukaSIQVIAIMqCC?format=jpg&name=large";
    let hobby1 = "https://pbs.twimg.com/media/EbqUh6BU8AAYy1Q?format=jpg&name=large";
    let hobbyLinks = [hobby0, hobby1];
    return (
        <div>
            <a href = {hobbyLinks[0]}>Link Text</a>
            <a href = {hobbyLinks[1]}>Link Text</a>
        </div>
    );
}
