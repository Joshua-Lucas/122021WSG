export const Theme = {
  colors: {
    primary: '#FFF',
    secondary: 'rgb(1, 1, 20)',
    darkAccent: '#222a96',
    lightAccent: 'rgb(0, 180, 216)',
    neutral: 'rgb(202, 240, 248)',
  },
  accessability: {
    srOnly: `position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;`,
    notSrOnly: `position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;`,
  },
};
