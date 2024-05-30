import React, { useState } from 'react';
import { Container, Heading, VStack, Box, Button, Textarea } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl" mb={6}>Code Editor</Heading>
        <Box width="100%" borderWidth="1px" borderRadius="md" overflow="hidden">
          <Editor
            value={code}
            onValueChange={handleCodeChange}
            highlight={(code) => highlight(code, languages.js, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
            }}
          />
        </Box>
        <Button colorScheme="teal" onClick={runCode}>Run Code</Button>
        <Button as={Link} to="/" colorScheme="gray">Back to Home</Button>
      </VStack>
    </Container>
  );
};

export default CodeEditor;