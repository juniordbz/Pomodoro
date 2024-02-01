import styled from 'styled-components'
import { breakpoints } from '../../../../breakpoints/breakpoints'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media ${breakpoints.md} {
    font-size: 2.5rem;
    line-height: 2rem;
    width: 100%;
    justify-content: center;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;

  display: flex;
  justify-content: center;
`
