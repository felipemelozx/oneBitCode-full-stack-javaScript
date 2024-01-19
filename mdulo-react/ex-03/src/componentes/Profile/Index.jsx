export default function Profile (props){
return(
  <div>
    <img src={props.avatar} alt={props.name} />
    <h2>{props.name}</h2>
    <div>{props.bio}</div>
    <div>{props.phone}</div>
    <div>{props.email}</div>
    <div>
      <a href={props.githubUrl} target="_blank">GitHub</a>
      <a href={props.LinkedinUrl} target="_blank">Linkedin</a>
      <a href={props.twitterUrl} target="_blank">Twitter</a>
    </div>
  </div>
)
}