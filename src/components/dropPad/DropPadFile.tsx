import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '../typography/Typography';
import { useTheme } from '../../hooks/useTheme';

import File from '../icons/File';
import TrashAlt from '../icons/TrashAlt';

import { DroppedFile } from './DropPad';

export interface DropPadFileProps extends DroppedFile {
  key: string | number;
  onDelete?: (key: string | number) => void;
}

const Container = styled.div`
  padding: 8px;
  background: ${({ theme }) => theme.dropPadBackground};
  border-radius: ${({ theme }) => theme.dropPadBorderRadius};

  margin-top: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFileIcon = styled(File)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledTrashIcon = styled(TrashAlt)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

// const LoadingBarContainer = styled.div`
//   position: relative;
//   background: ${({ theme }) => theme.dropPadFileLoadingBackground};
//   height: 4px;
//   border-radius: 2px;

//   margin-top: 8px;
// `;

// const LoadingBar = styled.div`
//   position: absolute;
//   background: ${({ theme }) => theme.dropPdjnvkklklklkadFileLoadingBarBackground};
//   height: 4px;
//   border-radius: 2px;
// `;

export const DropPadFile: React.FunctionComponent<DropPadFileProps> = ({
  file,
  key,
  // percentUploaded,
  onDelete,
}) => {
  const theme = useTheme();

  const handleDelete = React.useCallback(() => {
    if (onDelete) {
      onDelete(key);
    }
  }, [onDelete, key]);

  return (
    <Container key={key} theme={theme}>
      <ContentContainer>
        <TextContainer>
          <StyledFileIcon theme={theme} size={'2x'} />
          <Typography.Body>
            <strong>{file.name}</strong>
          </Typography.Body>
        </TextContainer>
        <StyledTrashIcon
          onClick={handleDelete}
          theme={theme}
          size={'1x'}
          inverse
        />
      </ContentContainer>
      {/* TODO: Implement percent uploaded at a later date */}
      {/* <LoadingBarContainer theme={theme}>
        <LoadingBar style={{ width: `${percentUploaded}%` }} theme={theme} />
      </LoadingBarContainer> */}
    </Container>
  );
};
