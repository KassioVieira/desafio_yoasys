import React from 'react'
import { Wrap } from './styles'

const Container = ({children, ...rest }) => (
	<Wrap {...rest}>
		{children}
	</Wrap>
)

export default Container
