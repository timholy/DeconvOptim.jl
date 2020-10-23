var documenterSearchIndex = {"docs":
[{"location":"function_references/regularizer/#Regularizers","page":"Regularizers","title":"Regularizers","text":"","category":"section"},{"location":"function_references/regularizer/","page":"Regularizers","title":"Regularizers","text":"TV\nTikhonov\nGR","category":"page"},{"location":"function_references/regularizer/#DeconvOptim.TV","page":"Regularizers","title":"DeconvOptim.TV","text":"TV(; <keyword arguments>)\n\nThis function returns a function to calculate the Total Variation regularizer of a n-dimensional array. \n\nArguments\n\nnum_dim=2: \nsum_dims=[1, 2, 3]: A array containing the dimensions we want to sum over\nweights=[1, 1, 0.25]: A array containing weights to weight the contribution of    different dimensions\nstep=1: A integer indicating the step width for the array indexing\nmode=\"central\": Either \"central\" or \"forward\" accounting for different   modes of the spatial gradient. Default is \"central\".\n\nExamples\n\nTo create a regularizer for a 4D dataset where the third dimension has a different sampling (factor 4 larger) than the first two dimensions. For the spatial gradient \"forward\" is used. The fourth dimensions is not considered in the regularizing process itself  but just acts as a summation of all 3D regularizers.\n\njulia> GR(num_dim=3, sum_dims=[1, 2, 3], weights=[1, 1, 0.25], mode=\"forward\")\n\nBugs\n\nResult is sometimes NaN -> current issue\n\n\n\n\n\n","category":"function"},{"location":"function_references/regularizer/#DeconvOptim.Tikhonov","page":"Regularizers","title":"DeconvOptim.Tikhonov","text":"Tikhonov(; <keyword arguments>)\n\nThis function returns a function to calculate the Tikhonov regularizer of a n-dimensional array. \n\nArguments\n\nnum_dim=2: \nsum_dims=[1, 2]: A array containing the dimensions we want to sum over\nweights=[1, 1]: A array containing weights to weight the contribution of    different dimensions\nstep=1: A integer indicating the step width for the array indexing\nmode=\"laplace\": Either \"laplace\" or \"spatial_grad_square\" accounting for different   modes of the Tikhonov regularizer. Default is \"laplace\".\n\nExamples\n\nTo create a regularizer for a 3D dataset where the third dimension has a different sampling (factor 4 larger) than the first two dimensions.\n\njulia> Tikhonov(sum_dims=[1, 2, 3], weights=[1, 1, 0.25])\n\n\n\n\n\n","category":"function"},{"location":"function_references/regularizer/#DeconvOptim.GR","page":"Regularizers","title":"DeconvOptim.GR","text":"GR(; <keyword arguments>)\n\nThis function returns a function to calculate the Good's roughness regularizer of a n-dimensional array. \n\nArguments\n\nnum_dim=2: Dimension of the array that should be regularized \nsum_dims=[1, 2]: A array containing the dimensions we want to sum over\nweights=[1, 1]: A array containing weights to weight the contribution of    different dimensions\nstep=1: A integer indicating the step width for the array indexing\nmode=\"forward\": Either \"central\" or \"forward\" accounting for different   modes of the spatial gradient. Default is \"central\".\n\nExamples\n\nTo create a regularizer for a 3D dataset where the third dimension has a different sampling (factor 4 larger) than the first two dimensions. For the spatial gradient \"forward\" is used.\n\njulia> GR(sum_dims=[1, 2, 3], weights=[1, 1, 0.25], mode=\"forward\")\n\n\n\n\n\n","category":"function"},{"location":"background/mathematical_optimization/#Mathematical-Optimization","page":"Mathematical Optimization","title":"Mathematical Optimization","text":"","category":"section"},{"location":"background/mathematical_optimization/","page":"Mathematical Optimization","title":"Mathematical Optimization","text":"The mathematical problem is a convex optimization problem we want to solve.","category":"page"},{"location":"background/regularizer/#Regularizer","page":"Regularizer","title":"Regularizer","text":"","category":"section"},{"location":"background/regularizer/","page":"Regularizer","title":"Regularizer","text":"Reguaralizer are commonly used in inverse problems and especially deconvolutions to obtain solutions which are smooth in some sense. So far we have implement three different reguarlizer. Goods Roughness, Tikhonov and TV.","category":"page"},{"location":"function_references/utils/#Util-functions","page":"Util functions","title":"Util functions","text":"","category":"section"},{"location":"function_references/utils/#Convolution-Functions","page":"Util functions","title":"Convolution Functions","text":"","category":"section"},{"location":"function_references/utils/","page":"Util functions","title":"Util functions","text":"conv_psf\nconv_otf\nconv_otf_r\nplan_conv_r","category":"page"},{"location":"function_references/utils/#DeconvOptim.conv_psf","page":"Util functions","title":"DeconvOptim.conv_psf","text":"conv_psf(obj, psf [, dims])\n\nConvolve obj with psf over dims dimensions. Based on FFT convolution.\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#DeconvOptim.conv_otf","page":"Util functions","title":"DeconvOptim.conv_otf","text":"conv_otf(obj, otf [, dims])\n\nPerforms a FFT-based convolution of an obj with an otf. otf = fft(psf). The 0 frequency of the otf must be located at position [1, 1, 1]. The obj can be of arbitrary dimension but ndims(psf) ≥ ndims(otf). The convolution happens over the dims array. Any further dimensions are broadcasted. Per default dims = [1, 2, 3].\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#DeconvOptim.conv_otf_r","page":"Util functions","title":"DeconvOptim.conv_otf_r","text":"conv_otf_r(obj, otf [, dims])\n\nPerforms a FFT-based convolution of an obj with an otf. Same arguments as conv_otf but with obj being real and otf=rfft(psf).\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#DeconvOptim.plan_conv_r","page":"Util functions","title":"DeconvOptim.plan_conv_r","text":"plan_conv_r(psf [, dims])\n\nPre-plan an optimized convolution for array shaped like psf (based on pre-plan FFT)  along the given dimenions dims. dims = [1, 2, 3] per default. The 0 frequency of psf must be located at [1, 1, 1]. We return first the otf (obtained by rfft(psf)). The second return is the convolution function conv. conv itself has two arguments. conv(obj, otf) where obj is the object and otf the otf.\n\nThis function achieves faster convolution than conv_psf(obj, psf).\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#Interpolation-and-downsampling","page":"Util functions","title":"Interpolation and downsampling","text":"","category":"section"},{"location":"function_references/utils/","page":"Util functions","title":"Util functions","text":"generate_downsample\nmy_interpolate","category":"page"},{"location":"function_references/utils/#DeconvOptim.generate_downsample","page":"Util functions","title":"DeconvOptim.generate_downsample","text":"generate_downsample(num_dim, downsample_dims, factor)\n\nGenerate a function (based on Tullio.jl) which can be used to downsample arrays. num_dim (Integer) are the dimensions of the array. downsample_dims is a list of which dimensions should be downsampled. factor is a downsampling factor. It needs to be an integer number.\n\nExamples\n\njulia> ds = generate_downsample(2, [1, 2], 2) \n[...]\njulia> ds([1 2; 3 4; 5 6; 7 8])\n2×1 Array{Float64,2}:\n 2.5\n 6.5\n\njulia> ds = generate_downsample(2, [1], 2)\n[...]\njulia> ds([1 2; 3 5; 5 6; 7 8])\n2×2 Array{Float64,2}:\n 2.0  3.5\n 6.0  7.0\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#DeconvOptim.my_interpolate","page":"Util functions","title":"DeconvOptim.my_interpolate","text":"my_interpolate(arr, size_n, [interp_type])\n\nInterpolates arr to the sizes provided in size_n. Therefore it holds ndims(arr) == length(size_n). interp_type specifies the interpolation type. See Interpolations.jl for all options\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#Center-Methods","page":"Util functions","title":"Center Methods","text":"","category":"section"},{"location":"function_references/utils/","page":"Util functions","title":"Util functions","text":"center_extract\ncenter_set!","category":"page"},{"location":"function_references/utils/#DeconvOptim.center_extract","page":"Util functions","title":"DeconvOptim.center_extract","text":"center_extract(arr, new_size)\n\nExtracts a center of an array.  new_size must be list of sizes indicating the output size of each dimension. Centered means that a center frequency stays at the center position. Works for even and uneven. If length(new_size) < length(size(arr)) the remaining dimensions are untouched and copied.\n\nExamples\n\njulia> center_extract([[1,2] [3, 4]], [1])\n1×2 Array{Int64,2}:\n 2  4\n\njulia> center_extract([[1,2] [3, 4]], [1, 1])\n1×1 Array{Int64,2}:\n4\n\n\n\n\n\n","category":"function"},{"location":"function_references/utils/#DeconvOptim.center_set!","page":"Util functions","title":"DeconvOptim.center_set!","text":"center_set!(arr_large, arr_small)\n\nPuts the arr_small central into arr_large. The convention, where the center is, is the same as the definition as for FFT based centered. Function works both for even and uneven arrays.\n\nExamples\n\njulia> center_set!([1, 1, 1, 1, 1, 1], [5, 5, 5])\n6-element Array{Int64,1}:\n 1\n 1\n 5\n 5\n 5\n 1\n\n\n\n\n\n","category":"function"},{"location":"background/physical_background/#Physical-Background","page":"Physical Background","title":"Physical Background","text":"","category":"section"},{"location":"background/physical_background/","page":"Physical Background","title":"Physical Background","text":"We want to provide some physical background the process of deconvolution in optics.","category":"page"},{"location":"basic_workflow/#Basic-Workflow","page":"Basic Workflow","title":"Basic Workflow","text":"","category":"section"},{"location":"#DeconvOptim.jl","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"","category":"section"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"An framework for fast deconvolution of images convolved with a Point Spread Function (PSF).","category":"page"},{"location":"#Overview","page":"DeconvOptim.jl","title":"Overview","text":"","category":"section"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"In optics, especially in microscopy, measurements are performed with lenses. These lenses support only certain frequencies and weaken the contrast of high frequency content. Furthermore in many cases Poisson or Gaussian noise is introduced by the  quantum nature of light (Poisson shot noise) or sensors (readout noise). DeconvOptim.jl is a Julia solution to that deconvolution process. Our framework relies on several other tools: The deconvolution problem is stated as a convex optimization problem (loss function). Hence we make use of Optim.jl and especially fast solvers like L-BFGS. Since such solvers require gradients (of the loss function) we use the automatic differentiation (AD) of Zygote.jl for that. Of course, one could derive the gradient by hand, however that's error-prone and for some regularizers hard to do by hand. Furthermore, fast AD of the regularizers are hard to achieve if the gradients are written with for loops. Fortunately Tullio.jl provides an extensive and fast framework to get expressions which can derived by the AD in acceptable speed.","category":"page"},{"location":"#Installation","page":"DeconvOptim.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"To get the latest stable release of DevonOptim.jl type ] in the Julia REPL:","category":"page"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"] add DeconvOptim","category":"page"},{"location":"#Quick-Example","page":"DeconvOptim.jl","title":"Quick Example","text":"","category":"section"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"Below is a quick example how to deconvolve a image which is blurred with a Gaussian Kernel.","category":"page"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"using DeconvOptim, TestImages, Images, FFTW, Noise\n\n# load test images\nimg = channelview(testimage(\"resolution_test_512\"))\n\n# create a Gaussian blur kernel (not very sophisticated for a real lens)\ndist = [sqrt((i - size(img)[1] / 2)^2 + (j - size(img)[2] / 2)^2)\n            for i = 1:size(img)[1],  j = 1:size(img)[2]]\npsf = ifftshift(exp.(-dist .^2 ./ 4.0 .^2))\n# normalize the sum\npsf ./= sum(psf)\n\n# create a blurred, noisy version of that image\nimg_b = conv_psf(img, psf, [1, 2])\nimg_n = poisson(img_b, 300)\n\nimg_n ./= maximum(img_n)\n\n# define a Good's Roughness regularizer\nreg = DeconvOptim.GR(sum_dims=[1, 2], weights=[1, 1], λ=0.05, mode=\"central\", step=1)\n# deconvolve\n@time res, o = deconvolution(img_n, psf, iterations=10,\n        lossf=Poisson(), mappingf=Non_negative(), regularizerf=reg)","category":"page"},{"location":"","page":"DeconvOptim.jl","title":"DeconvOptim.jl","text":"Gray image with noise and blur Restored image via deconvolution\n(Image: ) (Image: )","category":"page"}]
}
