	.file	"tables.c"
	.comm	_count, 4, 2
	.globl	_maxCount
	.data
	.align 4
_maxCount:
	.long	12
	.globl	_table
	.align 4
_table:
	.long	5
	.def	___main;	.scl	2;	.type	32;	.endef
	.section .rdata,"dr"
LC0:
	.ascii "%d x %d = %d\12\0"
	.text
	.globl	_main
	.def	_main;	.scl	2;	.type	32;	.endef
_main:
LFB10:
	.cfi_startproc
	pushl	%ebp
	.cfi_def_cfa_offset 8
	.cfi_offset 5, -8
	movl	%esp, %ebp
	.cfi_def_cfa_register 5
	andl	$-16, %esp
	subl	$16, %esp
	call	___main
	movl	$1, _count
	jmp	L2
L3:
	movl	_count, %edx
	movl	_table, %eax
	movl	%edx, %ecx
	imull	%eax, %ecx
	movl	_table, %edx
	movl	_count, %eax
	movl	%ecx, 12(%esp)
	movl	%edx, 8(%esp)
	movl	%eax, 4(%esp)
	movl	$LC0, (%esp)
	call	_printf
	movl	_count, %eax
	addl	$1, %eax
	movl	%eax, _count
L2:
	movl	_count, %edx
	movl	_maxCount, %eax
	cmpl	%eax, %edx
	jle	L3
	movl	$0, %eax
	leave
	.cfi_restore 5
	.cfi_def_cfa 4, 4
	ret
	.cfi_endproc
LFE10:
	.ident	"GCC: (MinGW.org GCC-6.3.0-1) 6.3.0"
	.def	_printf;	.scl	2;	.type	32;	.endef
