import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.80',
        color: 'gray.80',
        // fontSize: "md"   
      },
      a: {
        _hover: {
          textDecoration: 'underline',
          cursor: "pointer"
        }
      },
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