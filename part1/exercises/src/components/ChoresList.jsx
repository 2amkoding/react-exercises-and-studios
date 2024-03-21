import classes from './ChoresList.module.css';
export default function ChoresList () {
   let pageTitle = "Chores List";

   return (
      <div>
          <u><h2 className={classes.choresHeading}>{pageTitle}</h2></u>
          <i><ul className={classes.choresText}>
            <li>GRADED 4</li>
            <li>GRADED 5</li> 
            <li>GRADED 6</li> 
            <li>CATCH UP CHAPTERS</li>
         </ul></i>
      </div>
   );
}