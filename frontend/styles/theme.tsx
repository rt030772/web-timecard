import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  style: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.80',
        fontSize: "mini"   
      }
    }
  },
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    }
  }
})

export default theme;