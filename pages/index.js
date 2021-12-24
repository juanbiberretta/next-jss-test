import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { TitleText, LabelText, BodyText, MortarProvider, theme, Button } from "@policygenius/mortar";

const useStyles = createUseStyles((theme) => {
  return {
    small: {
      fontSize: '20px',
      lineHeight: '28px'
    },
    medium: {
      fontSize: '24px',
      lineHeight: '32px'
    },
    large: {
      fontSize: '32px',
      lineHeight: '40px'
    },
    xlarge: {
      fontSize: '40px',
      lineHeight: '48px'
    },
    xxlarge: {
      fontSize: '56px',
      lineHeight: '64px'
    },
    inherit: {
      fontSize: 'inherit',
      lineHeight: 'inherit'
    },
    root: ({ color }) => {
      return {
        fontFamily: theme.typography.fontFamily.sansSerif,
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.typography.fontColor[color]
      };
    },
    container: {
      marginTop: 100,
      textAlign: "center",
      backgroundColor: "orange",
      padding: "20px",
    },

    header: {
      fontFamily: 'Lora',
      color: 'white',
      fontSize: 24,
      lineHeight: 1.25,
    },
  }
}
)


function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

Server: "root-2-2-8 root-d3-2-2-32 secondary-2-2-5 medium-2-2-2 medium-2-2-11"
Client: "root-2-2-8 root-d0-2-2-9 secondary-2-2-5 medium-2-2-2 medium-2-2-11"
// https://stackoverflow.com/questions/50685175/react-material-ui-warning-prop-classname-did-not-match

const Content = () => {
  const classes = useStyles({ color: 'orange' });
  return (
    <div>
      <Button variant="secondary">
        <LabelText size="large"> it's me label </LabelText>
      </Button>
      <p className={`${classes.root} ${classes.large}`}>
        [1] Build locally mimicking Mortar styles
        hi
      </p>

      <p className={`${classes.root} ${classes.large}`}>
        [2] Build locally mimicking Mortar styles
      </p>
      {/* <TitleText size="large" color="orange">
        This is an actual mortar component and should be orange
      </TitleText> */}
      <p className={`${classes.root} ${classes.medium}`}>
        [3] Build locally mimicking Mortar styles
      </p>
    </div>
  );
}

export default Index;
